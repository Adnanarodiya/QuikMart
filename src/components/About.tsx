export default function About() {
  return (
    <div className="flex justify-center items-center gap-8 h-[80vh]">
      <div>
        <img
          className="w-96 rounded-3xl hover:scale-95"
          src="img/profile.jpg"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-3xl mb-4">Hi 👋! My name is Adnan</h1>
        <h3 className="text-xl mb-4">Web Developer | Student | Learner</h3>
        <p>
          🌱 I’m currently learning React <br />
          📫 How to reach me aiarodiya07@gmail.com
          <br /> 👨‍💻 All of my projects are available at Github <br />
          💬 Ask me about Html,Css,C,JavaScript,tailwind,Sass,React,TypeScript.
          <br /> 🌍 I'm based in India
          <br /> 🖥️ See my portfolio at My website <br />
          ✉️ You can contact me at aiarodiya07@gmail.com
        </p>
      </div>
    </div>
  );
}
