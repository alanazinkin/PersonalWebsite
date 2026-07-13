import resume from '../assets/Alana_Zinkin_Resume.pdf';
import '../styles/Resume.css';

function Resume() {
  return (
    <div className="resume-page">
      <div className="container resume-inner">
        <div className="resume-header">
          <h1>Resume</h1>
          <a className="btn btn-primary" href={resume} download target="_blank" rel="noopener noreferrer">
            Download PDF
          </a>
        </div>

        <div className="resume-embed">
          <embed src={resume} type="application/pdf" title="Alana Zinkin's Resume" />
        </div>
      </div>
    </div>
  )
}

export default Resume
