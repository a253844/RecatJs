import React, { useState  } from 'react';
import Button from '@material-ui/core/Button';

const Progress=()=>{
    const [percent, changePercent] = useState( 0 );
    console.log( useState("初始值"))    
    return(
      <div>
        <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
            <div className="progress-bar" style={{backgroundColor:"#fe5196",width:percent+"%",height:"100%",borderRadius:"10px"}}></div>
            </div>
        <Button onClick={()=>{changePercent( (percent + 5 )  )}}> 轉換百分比 </Button>
      </div>
    );
}

export default Progress;