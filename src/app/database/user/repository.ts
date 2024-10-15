import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import prisma from "../../../../lib/prisma_config";
import * as argon2 from "argon2";

export class UserRepository {
  static async loginUser(username: string, password: string) {
    try {
      const user = await prisma.login.findUnique({
        where: {
          username: username,
        },
      });

      if (!user)
        return {
          status: 444,
          message: "User not found",
        };
      const isMatch = await argon2.verify(user.password, password);
      if (isMatch) {
        const rest = {
          username: user.username,
          role: user.role,
          sessionId: user.sessionId,
          sessionExpiry: user.sessionExpiry,
          createdAt: user.createdAt,
        };
        return {
          status: 200,
          message: "Login successful",
          data: rest,
        };
      } else
        return {
          status: 401,
          message: "Invalid credentials",
        };
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(String(error));
      }
    }
  }

  static async signUpUser(email: string, password: string, role: string) {
    const hashedPassword = await argon2.hash(password);
    const userRepo = new UserRepository();

    try {
      const user = await prisma.login.create({
        data: {
          username: email,
          password: hashedPassword,
          role: role,
        },
      });
      let created;
      if (role === "user") created = await userRepo.createCustomer(email);
      else if (role === "supplier")
        created = await userRepo.createSupplier(email);
      const rest = {
        username: user.username,
        role: user.role,
        sessionId: user.sessionId,
        sessionExpiry: user.sessionExpiry,
        createdAt: user.createdAt,
      };
      const result = { user: rest, created: created };
      return result;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          return {
            message: "User already exists",
            status: 401,
          };
        }
      }
      return {
        message: "Something went wrong during sign up",
        status: 500,
      };
    }
  }

  async createCustomer(email: string) {
    try {
      const customer = await prisma.customer.create({
        data: {
          email: email,
        },
      });
      return customer;
    } catch (error) {
      console.log(error);
    }
  }

  async createSupplier(email: string) {
    try {
      const supplier = await prisma.supplier.create({
        data: {
          email: email,
        },
      });
      return supplier;
    } catch (error) {
      console.log(error);
    }
  }
}
