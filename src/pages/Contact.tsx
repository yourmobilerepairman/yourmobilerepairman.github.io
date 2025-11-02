import Hero from '../components/Hero';

export default function Contact() {
  return (
    <>
      <Hero title="Contact Us" />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 text-center">
            Get in touch with us today for all your mobile repair needs!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                    <a
                      href="mailto:info@yourmobilerepairman.com"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      yourmobilerepairman@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">Phone / WhatsApp</h4>
                    <a
                      href="tel:+19408822630"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      (940) 882-2630
                    </a>
                  </div>
                </div>

                {/* Facebook Messenger */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">Facebook Messenger</h4>
                    <a
                      href="https://m.me/701483226386757?source=qr_link_share"
                      className="text-blue-600 hover:text-blue-700"
                      target="_blank"
                    >
                      Your Mobile Repairman
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Follow Us
              </h3>

              <p className="text-gray-600 mb-6">
                Stay connected and follow us on social media for updates, tips, and special offers!
              </p>

              <div className="space-y-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/16p8HQxHqx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    f
                  </div>
                  <span className="ml-4 text-gray-700 font-medium">Facebook</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/yourmobilerepairman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-pink-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    IG
                  </div>
                  <span className="ml-4 text-gray-700 font-medium">Instagram</span>
                </a>

                {/* Nextdoor */}
                <a
                  href="https://nextdoor.com/pages/your-mobile-repairman-denton-tx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-green-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    ND
                  </div>
                  <span className="ml-4 text-gray-700 font-medium">Nextdoor</span>
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-8 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Business Hours
            </h3>
            <div className="max-w-md mx-auto">
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Thursday:</span>
                  <span>5:30 PM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Friday:</span>
                  <span>Closed</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday - Sunday:</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
