// src/pages/buyer/cart.tsx

import Link from "next/link";

const CartPage = () => {
  const items = [
    { id: 1, name: "Vintage Radio", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius porro quibusdam distinctio illo aliquid ad, quas dolorem molestiae deserunt eos?", price: 59.99, quantity: 1, image:"https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" },
    { id: 2, name: "Retro Lamp", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius porro quibusdam distinctio illo aliquid ad, quas dolorem molestiae deserunt eos?", price: 39.99, quantity: 1, image:"https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" },
    { id: 2, name: "Retro Lamp", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius porro quibusdam distinctio illo aliquid ad, quas dolorem molestiae deserunt eos?", price: 39.99, quantity: 1, image:"https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" },
    { id: 2, name: "Retro Lamp", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius porro quibusdam distinctio illo aliquid ad, quas dolorem molestiae deserunt eos?", price: 39.99, quantity: 1, image:"https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" },
    { id: 2, name: "Retro Lamp", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius porro quibusdam distinctio illo aliquid ad, quas dolorem molestiae deserunt eos?", price: 39.99, quantity: 1, image:"https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" },
    { id: 2, name: "Retro Lamp", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius porro quibusdam distinctio illo aliquid ad, quas dolorem molestiae deserunt eos?", price: 39.99, quantity: 1, image:"https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" },
    { id: 2, name: "Retro Lamp", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius porro quibusdam distinctio illo aliquid ad, quas dolorem molestiae deserunt eos?", price: 39.99, quantity: 1, image:"https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" },
    { id: 2, name: "Retro Lamp", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius porro quibusdam distinctio illo aliquid ad, quas dolorem molestiae deserunt eos?", price: 39.99, quantity: 1, image:"https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" },
    { id: 2, name: "Retro Lamp", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius porro quibusdam distinctio illo aliquid ad, quas dolorem molestiae deserunt eos?", price: 39.99, quantity: 1, image:"https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" },
    { id: 2, name: "Retro Lamp", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius porro quibusdam distinctio illo aliquid ad, quas dolorem molestiae deserunt eos?", price: 39.99, quantity: 1, image:"https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" },
    { id: 2, name: "Retro Lamp", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius porro quibusdam distinctio illo aliquid ad, quas dolorem molestiae deserunt eos?", price: 39.99, quantity: 1, image:"https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" },
    { id: 2, name: "Retro Lamp", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius porro quibusdam distinctio illo aliquid ad, quas dolorem molestiae deserunt eos?", price: 39.99, quantity: 1, image:"https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" },
  ];

  const calculateTotal = () =>
    items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  if (items.length === 0) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-4 text-yellow-700 retro-font">Your Cart is Empty</h1>
        <Link href="/buyer/dashboard/pages">
          <a className="text-orange-600 hover:underline hover:text-orange-800 retro-font">Continue Shopping</a>
        </Link>
      </div>
    );
  }

  return (
    <section className="mx-auto py-10 px-4 md:px-8 2md:px-20 bg-gradient-to-b from-yellow-50 to-orange-100 rounded-lg shadow-xl">
      <div className=" w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6 text-yellow-800 retro-font">Your Shopping Cart</h1>
        <div className=" w-full flex flex-col 2md:flex-row justify-center gap-6">
          <div className=" w-full 2md:w-3/4 space-y-4">
            {items.map((item) => (
              <div key={item.id} className=" flex items-center gap-3 bg-white p-4 rounded-lg shadow-md border-2 border-yellow-300">
                <div className=" w-2/5 2md:w-1/5 flex flex-col items-center justify-center">
                  <img
                    src={item.image || "/placeholder.png"}
                    alt={item.name}
                    className=" w-full object-cover rounded-lg mr-4 border-2 border-yellow-500"
                  />
                  <div className=" w-full flex justify-center items-center mt-2">
                    <button className="px-3 py-1 bg-yellow-200 rounded hover:bg-yellow-300">-</button>
                    <span className="px-4 font-semibold text-orange-700">{item.quantity}</span>
                    <button className="px-3 py-1 bg-yellow-200 rounded hover:bg-yellow-300">+</button>
                  </div>
                </div> 
                <div className=" w-3/5 2md:w-4/5">
                  <div className=" flex flex-col md:flex-row text-left justify-center">
                    <h2 className=" text-lg md:text-2xl font-medium text-orange-700 retro-font">{item.name}</h2>
                    <p className=" text-xs md:text-sm text-gray-600">{item.description}</p>
                    <p className="text-yellow-600">Price: ${item.price.toFixed(2)}</p>
                    <p className="mt-2 text-orange-700 font-semibold">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <button className="text-red-600 hover:text-red-800 ml-0 md:ml-4 retro-font">Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className=" w-full 2md:w-1/4 mt-6 text-right">
            <h2 className="text-3xl font-semibold text-orange-800 retro-font">Total Amount: ${calculateTotal()}</h2>
            <button className="mt-4 bg-orange-600 text-white py-2 px-6 rounded-lg hover:bg-orange-700 retro-font shadow-lg">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
