import React, {useState, useEffect} from 'react';

function Day(){
    // state variables and use effects
    const [quote, setQuote] = useState("");
    useEffect(() => {
        console.log("refresh quote");
        console.log(quote);
    });

    const [more_less, setMoreLess] = useState(false);
    useEffect(() => {
        // updates state of more or less feature
        // renders updated state of page

        // determines whether to display expansion stats
        console.log(more_less);
        if(more_less === true){
            document.getElementsByClassName("Day_quote")[0].style.display = "none";
            document.getElementsByClassName("Expand")[0].style.display = "block";
            document.getElementsByClassName("more_less_icon")[0].style.transform = "rotate(0deg)";
            document.getElementsByClassName("more_less_btn_val")[0].innerHTML = "LESS";
        }
        else{
            document.getElementsByClassName("Day_quote")[0].style.display = "block";
            document.getElementsByClassName("Expand")[0].style.display = "none";
            document.getElementsByClassName("more_less_icon")[0].style.transform = "rotate(180deg)";
            document.getElementsByClassName("more_less_btn_val")[0].innerHTML = "MORE";
        }

    }, [more_less]);

    const update_more_less = () => setMoreLess(!more_less);
    
    return(
    <div className="Day">
        
        <div className="Day_quote"> 

            <div className="Div_Quote">
                "The science of operations, as derived from mathematics more especially,
                is a science of itself, and has its own abstract truth and value."
                <div style={{'marginTop':"10px"}}> Ada Lovelace </div>
            </div>
            
            <div onClick={()=> setQuote("Hello")} className="Refresh_Quote"> 
                <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.188 10.667a.208.208 0 01.147.355l-2.344 2.206a5.826 5.826 0 009.578-2.488l2.387.746A8.322 8.322 0 013.17 14.94l-2.149 2.022a.208.208 0 01-.355-.148v-6.148h6.52zm7.617-7.63L16.978.958a.208.208 0 01.355.146v6.23h-6.498a.208.208 0 01-.147-.356L13 4.765A5.825 5.825 0 003.43 7.26l-2.386-.746a8.32 8.32 0 0113.76-3.477z" fill="#FFF" fill-rule="nonzero" opacity=".5"/>
                </svg>
            </div>

        </div>

        <div className="Day_stats"> 

            <div id="time_info" style={{"padding-bottom" : "5em"}}> 

                <div className="Day_state">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.78 19.417c.594 0 1.083.449 1.146 1.026l.006.125v1.842a1.152 1.152 0 01-2.296.125l-.007-.125v-1.842c0-.636.516-1.151 1.152-1.151zM6.382 17.18a1.15 1.15 0 01.09 1.527l-.09.1-1.302 1.303a1.152 1.152 0 01-1.718-1.528l.09-.1 1.302-1.302a1.15 1.15 0 011.628 0zm12.427 0l1.303 1.303a1.15 1.15 0 11-1.628 1.627L17.18 18.81a1.15 1.15 0 111.628-1.628zM11.781 5.879a5.908 5.908 0 015.901 5.902 5.908 5.908 0 01-5.901 5.902 5.908 5.908 0 01-5.902-5.902 5.908 5.908 0 015.902-5.902zm10.63 4.75a1.151 1.151 0 110 2.303h-1.843a1.151 1.151 0 110-2.303h1.842zm-19.418 0a1.151 1.151 0 01.126 2.296l-.125.007H1.15a1.151 1.151 0 01-.125-2.296l.125-.007h1.842zm1.985-7.268l.1.09 1.303 1.302a1.151 1.151 0 01-1.528 1.718l-.1-.09L3.45 5.08A1.15 1.15 0 014.978 3.36zm15.133.09c.45.449.45 1.178 0 1.628L18.808 6.38a1.151 1.151 0 11-1.628-1.628l1.303-1.303c.449-.449 1.178-.449 1.628 0zM11.781 0c.636 0 1.151.515 1.151 1.151v1.843a1.152 1.152 0 01-2.303 0V1.15C10.63.515 11.145 0 11.781 0z" fill="#FFF" fill-rule="nonzero"/>
                    </svg>
                    <div style={{'padding-left':'1em'}}> GOOD MORNING </div> <div id="greetings">, IT'S CURRENTLY</div>
                </div>

                <div className="Day_time">
                    <span class="time_val"> 11:37 </span> <span> BST </span>
                </div>

                <div className="Day_location">
                    <span> IN </span> <span id="city"> LONDON </span>, <span> UK </span>
                </div>

            </div>

            <div onClick={update_more_less} class="more_less_btn">  
                <div className="more_less_btn_val style_btn"> MORE </div> 
                <svg className="more_less_icon style_btn" width="40" height="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#303030" cx="20" cy="20" r="20"/><path stroke="#FFF" stroke-width="2" d="M14 23l6-6 6 6"/></g></svg> 
            </div>

        </div>

    </div>
    );
}

export default Day;