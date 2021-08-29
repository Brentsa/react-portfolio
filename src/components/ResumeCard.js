//import the pdf from the assets so that we can set it as a download
import pdf from '../assets/Resume.pdf'

function ResumeCard()
{
    return (
        <div className="col-12 col-md-8 col-lg-4 d-flex flex-column align-items-center justify-content-center resume-card my-4">
            <a href={pdf} download="Sean's Resume.pdf" className="a2"><i className="far fa-file-pdf resume-icon"></i></a>
            <h2 className="col-10 col-lg-8 mb-4 py-3 top-border bottom-border color-primary text-center">Click the PDF icon above to download my resume!</h2>
        </div>
    )
    
}

export default ResumeCard;