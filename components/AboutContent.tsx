import TechList from './TechList'  // Adjust the import path as needed

export function AboutContent() {
  return (
    <div className="prose dark:prose-invert max-w-none prose-neutral dark:prose-invert prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-li:marker:text-foreground">
      <h1>Hello!</h1>

      <p>I'm Ian Samir Yep Manzano, a Mexican-British medical doctor and aspiring Software Engineer.</p>

      <h2>My Experience</h2>

      <p>I work with various technologies including:</p>

      <TechList>
        <ul>
          <li>C++ for competitive programming / PlatformIO for embedded systems</li>
          <li>Java / Springboot / Mockito</li>
          <li>Docker / Kubernetes / Redhat OpenShift</li>
          <li>GitLab / Github including CI/CD pipelines</li>
          <li>Godot with GDScript for game development</li>
          <li>Python / Django / PyQt </li>
          <li>Figma for prototyping</li>
          <li>NextJS / React / Typescript /TailwindCSS / ShadcnUI / Supabase / Clerk authentication for frontend web development</li>
          <li>Expo / React Native for mobile development</li>
        </ul>
      </TechList>

      <h2>Get in Touch</h2>

      <p>
        Feel free to reach out to me on{" "}
        <a href="https://github.com/isym444">GitHub</a> or{" "}
        <a href="https://linkedin.com/in/ian-samir-yep-manzano-5376107b">LinkedIn</a>!
      </p>
    </div>
  )
} 