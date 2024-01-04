export default function About() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 h-[80vh]">
      <div>
        <img
          className="w-32 md:w-80 xl:w-96 rounded-3xl hover:scale-95 hover:duration-500 duration-700"
          src="img/profile.jpg"
          alt=""
        />
      </div>
      <div>
        <h1 className="font-medium xl:text-3xl mb-4">
          Hi 👋! My name is Adnan
        </h1>
        <h3 className="italic xl:text-xl mb-4">
          Web Developer | Student | Learner
        </h3>
        <div className="text-base w-60 md:w-80 xl:w-96">
          I'm a computer engineering student deeply passionate about web
          development. Specializing in front-end technologies like HTML, CSS,
          SaaS, Tailwind, React, JavaScript, Python, C, Bootstrap, and Figmac, I
          bring a versatile skill set to the table. Beyond coding, I find joy in
          playing video games during my free time, creating a perfect balance
          between my technical skills and leisure activities.
        </div>
      </div>
    </div>
  );
}
