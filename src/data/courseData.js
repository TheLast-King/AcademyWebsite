import tabla from "../assets/courses/tabla.jpg"
import guitar from "../assets/courses/guitar.jpg"
import keyboard from "../assets/courses/keyboard.jpg"
import harmonium from "../assets/courses/harmonium.jpg"
import dance from "../assets/courses/dance.jpg"
import publicSpeaking from "../assets/courses/publicSpeaking.jpg"
import yoga from "../assets/courses/yoga.jpg"
import tarot from "../assets/courses/tarot.jpg"
import mahendi from "../assets/courses/mahendi.jpg"
import beauty from "../assets/courses/beauty.jpg"


const  coursesData =   [
    
  {
    url: "guitar",
    Name: "Guitar",
    Days: "Mon - Thurs",
    Timing: ["4:00 p.m.","p:00 p.m."],
    Course_Details: ["1M", "3M", "6M", "1 year"],
    img: guitar,
    content: "Unleash your musical potential with Saukh's Guitar Course! Our expert instructors offer personalized guidance, teaching everything from basic chords to advanced techniques. Enjoy interactive lessons, flexible scheduling, and access to quality instruments. Whether you're a beginner or seeking to refine your skills, join us to strum along to your favorite tunes and ignite your passion for music! Enroll today and start your musical journey with Saukh!"
  },
  {
    url: "keyboard",
    Name: "Keyboard",
    Days: "Mon - Sat",
    Timing: ["5:00 p.m.","9:00 p.m."],
    Course_Details: ["1M", "3M", "6M", "1 year"],
    img: keyboard,
    content: "Discover the magic of music with Saukh's Keyboard Music Course! Our expert instructors provide personalized guidance, teaching fundamental skills and advanced techniques. Enjoy interactive lessons, flexible scheduling, and access to quality instruments. Whether you're a beginner or looking to enhance your proficiency, join us to unlock your musical potential. Enroll now and embark on a melodious journey with Saukh!"
  },
  {
    url: "tabla",
    Name: "Tabla",
    Days: "Mon - Sat",
    Timing: ["5:00 p.m.","9:00 p.m."],
    Course_Details: ["1M", "3M", "6M", "1 year"],
    img: tabla,
    content: "Embark on a rhythmic journey with Saukh's Tabla Course! Our skilled instructors offer personalized guidance, teaching essential techniques and intricate rhythms. Enjoy interactive lessons, flexible scheduling, and access to quality instruments. Whether you're a novice or aiming to refine your tabla skills, join us to explore the rich tradition of Indian percussion. Enroll today and let the beats of tabla resonate with Saukh!"
  },
  {
    url: "harmonium",
    Name: "Harmonium",
    Days: "Mon - Fri",
    Timing: ["4:00 p.m.","9:00 p.m."],
    Course_Details: ["1M", "3M", "6M", "1 year"],
    img: harmonium,
    content: "Dive into the melodious world of music with Saukh's Harmonium Course! Our experienced instructors provide personalized guidance, teaching essential techniques and intricate melodies. Enjoy interactive lessons, flexible scheduling, and access to quality instruments. Whether you're a beginner or seeking to master harmonium, join us to unlock your musical potential. Enroll now and let the enchanting tunes of harmonium fill your life with joy at Saukh!"
  },
  {
    url: "dance",
    Name: "Dance",
    Days: "Mon - Fri",
    Timing: ["6:00 p.m.","8:00 p.m."],
    Course_Details: ["1M", "3M", "6M", "1 year"],
    img: dance,
    content: "Ignite your passion for movement with Saukh's Dance Course! Our skilled instructors offer personalized guidance, teaching various dance styles and techniques. Enjoy interactive lessons, flexible scheduling, and a supportive learning environment. Whether you're a beginner or aiming to refine your skills, join us to express yourself through the art of dance. Enroll now and let your creativity shine on the dance floor with Saukh!"
  },
  {
    url : "public-speaking",
    Name: "Public Speaking",
    Days: "Mon - Fri",
    Timing: ["8:30 p.m.", "10:30 p.m."],
    Course_Details: ["2M"],
    img: publicSpeaking,
    content: "Master the art of communication with Saukh's Public Speaking Course! Our expert instructors provide personalized guidance, teaching essential techniques to captivate and inspire your audience. Enjoy interactive sessions, practical exercises, and constructive feedback in a supportive environment. Whether you're a novice or seeking to polish your speaking skills, join us to unleash your confidence and charisma on stage. Enroll now and become a persuasive speaker with Saukh!"
  },
  {
    url: "yoga-aerobic",
    Name: "Yoga Aerobic",
    Days: "Mon - Sat",
    Timing: ["6:00 p.m.", "8:00 p.m."],
    Course_Details: ["1M", "3M", "6M", "1 year"],
    img: yoga,
    content: "Elevate your fitness journey with Saukh's Yoga Aerobics Course! Our experienced instructors blend the benefits of yoga and aerobics, offering personalized guidance to enhance your strength, flexibility, and overall well-being. Enjoy dynamic sessions, rhythmic movements, and mindful breathing techniques in a supportive atmosphere. Whether you're a beginner or fitness enthusiast, join us to rejuvenate your body and mind. Enroll now and experience the synergy of yoga and aerobics with Saukh!"
  },
  {
    url: "tarot-card-reading",
    Name: "Tarot Card Reading",
    Days: "Mon - Sat",
    Timing: ["8:30 p.m.","10:30 p.m."],
    Course_Details: ["10 Days"],
    img: tarot,
    content: ""
  },
  {
    Name: "Beauty Parlour",
    Days: "Mon - Wed - Sat",
    Timing: ["2:00 p.m.","4:00 p.m."],
    Course_Details: ["3M", "6M", "1 year"],
    img: beauty,
    content: ""
  },
  {
    Name: "Mahendi",
    Days: "Mon - Wed - Sat",
    Timing: ["2:00 p.m.","4:00 p.m."],
    Course_Details: ["3M", "6M", "1 year"],
    img: mahendi,
    content: ""
  },
  {
    Name: "NATA",
    Days: "Sat - Sun",
    Timing: ["6:00 p.m.","8:00 p.m."],
    Course_Details: ["1 year"],
    img: yoga,
    content: ""
  }


];

  
export default coursesData;