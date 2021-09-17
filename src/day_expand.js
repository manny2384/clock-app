function DayExpand(){

    return(
        <div className="Expand"> 

            <div className="Expand_item_block"> 

                <div className="Expand_item">
                    <span className="Expand_item_info Stat_name"> Current Time Zone: </span> <span className="Expand_item_info Stat_value"> European/London </span>
                </div> 
                
                <div className="Expand_item">
                    <span className="Expand_item_info Stat_name"> Day Of The Year: </span> <span className="Expand_item_info Stat_value"> 295 </span>  
                </div>

            </div>

            <div className="Expand_item_block"> 
        
                <div className="Expand_item">
                    <span className="Expand_item_info Stat_name"> Day Of The Week: </span> <span className="Expand_item_info Stat_value"> 5 </span>
                </div>

                <div className="Expand_item">
                    <span className="Expand_item_info Stat_name"> Week Number: </span> <span className="Expand_item_info Stat_value"> 42 </span>    
                </div>      

            </div>

        </div>
    );
}

export default DayExpand;