const ProjectItem = props => {
  const {projectDetails} = props
  const {projectName, description, projectUrl} = projectDetails
  return (
    <li>
      <h1>{projectName}</h1>
      <p>{description}</p>
      <button type="button">
        <a href={projectUrl}>View</a>
      </button>
    </li>
  )
}
export default ProjectItem
