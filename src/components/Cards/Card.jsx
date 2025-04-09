import {motion} from "motion/react"
import adult from "../../assets/images/adult.png"
import dictionary from  "../../assets/images/dictionary.png"
import exam from "../../assets/images/exam.png"
import tutoring from "../../assets/images/tutoring.png"



function Card() {
  const CardItems = [
    {
      cardTitle: "Literacy and Language Training",
      paragraph: "just some random paragrap stuff",
      icon: dictionary
    },

    // {
    //   cardTitle: "Public Speaking & Communication Skills",
    //   paragraph:
    //     "Gain confidence in expressing yourself in social and professional settings.",
    // },

    { cardTitle: " Academic Tutoring (Children & Adults)",
       paragraph: "Get support in subjects like English, math, science, and more." ,
       icon: tutoring
    },
    { cardTitle: "Adult Learning Programs", 
      paragraph: "Overcome learning barriers and develop skills for career and personal growth." ,
      icon: adult
    },
    { cardTitle: "Exam Preparation", 
      paragraph: "Prepare for school and professional exams with expert guidance." ,
      icon: exam
    },
  ];
  return (
    <>
      {CardItems.map(({ cardTitle, paragraph , icon}) => (
        <motion.div
        initial={{  opacity: 0 ,y: 100}}    // Start 100px below, invisible
        whileInView={{ opacity: 1 ,y: 0 }}      // Animate to position
        transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            text-gray-950 bg-white  text-xl shadow-2xl
     p-4 text-center rounded-xl flex  space-between"
        >
          <div className="icon flex justify-start mr-4 "><img src={icon} alt="icon " className="w-[45px] h-[40px] " /></div>
          <div className="flex flex-col  text-start">
          <h2 className="text-xl font-semibold mb-2">{cardTitle}</h2>
          <p className="text-sm">{paragraph}</p>
          </div>
         
        </motion.div>
      ))}
    </>
  );
}

export default Card;
