import { FaEye } from 'react-icons/fa';
import Soutsaka from '../assets/images/download.jfif'
import Alo from '../assets/images/Alo.jpg'
import Wecare from '../assets/images/Wecare.jpg'

const EducationCertifications = () => {
  return (
    <div className="bg-[#f4f7fb] min-h-screen p-6">
      <h2 className="text-3xl font-bold text-center mb-10">Education & Certifications</h2>

      <div className="space-y-10 max-w-5xl mx-auto">
        {/* Soutsaka institute of technology */}
        <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md">
          <img src={Soutsaka} alt="Chulalongkorn University" className="w-24 h-24 object-contain" />
          <div>
            <h3 className="font-bold text-yellow-600">Soutsaka institute of technology</h3>
            <p className="text-lg font-medium">Information and Communication Engineering</p>
            <p className="text-gray-700">( International School of Engineering )</p>
            <p className="text-gray-500">Graduated: Jun 2011</p>
            <p className="text-gray-500 text-sm">A field related to computer programming, computer architecture, data structure, digital communications</p>
          </div>
        </div>

        {/* Software*/}
        <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md">
          <img src={Alo} alt="Code Camp" className="w-24 h-24 object-contain" />
          <div>
            <h3 className="font-bold text-yellow-600">Software Engineer at Alo Technology Group</h3>
            <p className="text-lg font-medium">Full Stack JavaScript For Web Developer</p>
            <p className="text-gray-500">Mar–Jul 2023</p>
            <p className="text-gray-500 text-sm">Onsite learning bootcamp 8 hours a day for 4 months</p>
          </div>
        </div>

        {/* Udemy */}
        <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md">
          <img src={Wecare} alt="Udemy" className="w-24 h-24 object-contain" />
          <div>
            <h3 className="font-bold text-yellow-600">Udemy</h3>
            <p className="text-lg font-medium">The Ultimate React Course 2024: React, Next.js, Redux & More</p>
            <p className="text-gray-500">May–Nov 2024</p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              <FaEye className="text-gray-400" />
              Click here to see how I spent 398 hours in 6 months for this course
            </p>
            <button className="mt-2 px-4 py-1 border rounded-full text-sm hover:bg-gray-100">view certificate</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EducationCertifications;
