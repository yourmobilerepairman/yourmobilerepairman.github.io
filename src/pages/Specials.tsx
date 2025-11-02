import Hero from '../components/Hero';

export default function Specials() {
  return (
    <>
      <Hero title="Current Specials" />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 text-center">
            Check out our current promotions and special offers!
          </p>

          <div className="space-y-6">
            {/* Motorcycle tune-up */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4">
                <h3 className="text-2xl font-bold">Motorcycle Tune-Up Special</h3>
                <p className="text-blue-100 mt-1">Limited Time Offer</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Get your motorcycle ready for riding season! Comprehensive tune-up includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                  <li>Oil change</li>
                  <li>Chain adjustment and lubrication</li>
                  <li>Brake inspection</li>
                  <li>Tire pressure check</li>
                  <li>Fluid level inspection</li>
                </ul>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-3xl font-bold text-blue-600">$199.99</span>
                  <span className="text-gray-500 line-through">Regular $249.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
