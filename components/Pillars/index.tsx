export default function Pillars() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center md:justify-between">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-center">Innovation</h3>
            <p className="text-center">We are always looking for new ways to improve our services and products.</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-center">Quality</h3>
            <p className="text-center">We are committed to delivering the highest quality products to our customers.</p>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-center">Customer Service</h3>
            <p className="text-center">We are dedicated to providing excellent customer service to all our clients.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
