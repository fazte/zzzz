import './Button.css'

export default function Button({title,style}){
    let css = {}
    if(style == 'dark'){
        css = {
            background: '#232323',
            color: '#F9F9F9',
        }
    }
    if(style == 'green'){
        css = {
            background: 'green',
        }
    }      
    return(
        <button className="button" style={css}>{title}</button>
    )
}