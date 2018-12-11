import React from 'react';
import { Link } from 'react-router-dom';

function ProjectBox({ project }) {
  return (
    <div className="column is-4">
      <article className="project-box">
        <Link to={`/projects/${project._id}`}>
          <img src={project.image} />
          <h1 className="title is-5">{project.name} in {project.country}</h1>
        </Link>
        <p>Lorem ipsum dolor sit amet, at justo molestie consulatu sit. Has cu doming sententiae. Lucilius petentium vis ex, ridens iriure ornatus cu mel, adipisci periculis voluptaria per et. Mel ut tota ocurreret signiferumque, pri in munere explicari omittantur. Mutat graece voluptua ad pri, id pro vitae vidisse, vel detraxit quaestio erroribus id. Errem audiam fabellas ex vim, ne usu essent philosophia, te usu sint qualisque.

          Feugait eleifend vim ei, assum delectus intellegat cum et. Eam velit dolore adipiscing at. Quidam eirmod posidonium pri et. Mea senserit inciderint ex. Est te elit deserunt reprimique. Labore vulputate ne eum.Lorem ipsum dolor sit amet, at justo molestie consulatu sit. Has cu doming sententiae. Lucilius petentium vis ex, ridens iriure ornatus cu mel, adipisci periculis voluptaria per et. Mel ut tota ocurreret signiferumque, pri in munere explicari omittantur. Mutat graece voluptua ad pri, id pro vitae vidisse, vel detraxit quaestio erroribus id. Errem audiam fabellas ex vim, ne usu essent philosophia, te usu sint qualisque.

          Feugait eleifend vim ei, assum delectus intellegat cum et. Eam velit dolore adipiscing at. Quidam eirmod posidonium pri et. Mea senserit inciderint ex. Est te elit deserunt reprimique. Labore vulputate ne eum.Lorem ipsum dolor sit amet, at justo molestie consulatu sit. Has cu doming sententiae. Lucilius petentium vis ex, ridens iriure ornatus cu mel, adipisci periculis voluptaria per et. Mel ut tota ocurreret signiferumque, pri in munere explicari omittantur. Mutat graece voluptua ad pri, id pro vitae vidisse, vel detraxit quaestio erroribus id. Errem audiam fabellas ex vim, ne usu essent philosophia, te usu sint qualisque.
        </p>
      </article>
    </div>
  );
}

export default ProjectBox;
