import {Button} from 'react-bootstrap'

export default function Weather({display_name, color_name, page}) {
    return (
      <div className="p-4">
        <Button href={`/${page}`} className={`bg-gradient-to-r from-${color_name}-500 to-${color_name}-300
                w-96 h-56 m-auto rounded-xl shadow-2xl 
                transform hover:scale-110 transition-transform
                text-white relative`}>    
          <p className="text-4xl pt-20">
            {display_name}
          </p>
        </Button>
      </div>
    )
}