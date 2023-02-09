

export default function Project(props){

    

    return(
    
        <div className="project">
            <div className="project__description">
            <div className="project__description--title">{props.title}</div>
            <div className="project__description--technologies">
                {props.technologies.map((element)=>{
                    return <div className="technology">{element}</div>
                })}     
            </div>
            <div className="project__description--about">{props.description}</div>
            <a href={props.siteLink} target="_blank" rel="noreferrer"><button class="button-74">View project</button></a>
            </div>
            
            <div className="project__card">
                <div className="project__image" style={props.image}>
                    <div className="wrapper">
                        <a href={props.siteCode} target="_blank" rel="noreferrer"><button class="button-40">Check code</button></a>
                        <a href={props.siteLink} target="_blank" rel="noreferrer"><button class="button-40">Live site</button></a>
                    </div>
                </div>
            </div>
        </div>
    
    )
}