import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Hero title="Welcome to Your Mobile Repairman" />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Professional Mobile Repair Services
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Your Mobile Repairman is your trusted partner for mobile repair services.
              We come to you, providing convenient, professional repairs for a wide range
              of small engine equipment.
            </p>
            <p className="text-lg text-gray-700">
              With years of experience and a commitment to quality, we ensure your equipment
              is running smoothly and efficiently.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Services Include:
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-blue-600 mb-2">
                  Motorcycle Repair
                </h4>
                <p className="text-gray-600">
                  Comprehensive motorcycle maintenance and repair services
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-blue-600 mb-2">
                  ATV Service
                </h4>
                <p className="text-gray-600">
                  Expert ATV maintenance and troubleshooting
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-blue-600 mb-2">
                  Lawn Equipment
                </h4>
                <p className="text-gray-600">
                  Lawn mower and outdoor equipment repair
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-blue-600 mb-2">
                  Small Engine Repair
                </h4>
                <p className="text-gray-600">
                  General small engine maintenance and repair
                </p>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Mobile service - we come to you</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Competitive pricing</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Quality workmanship guaranteed</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
