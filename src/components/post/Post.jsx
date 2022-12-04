import "./post.css"
import React from 'react';

//axios for xml request
import axios from 'axios';

//import xmlData from '../../xmldata/data.xml';
//import XMLParser from 'react-xml-parser';
//var XMLParser = require('react-xml-parser')
//var jsonDataFromXml = new XMLParser().parseFromString(xmlData);

function Post() {
  return (
    
    //console.log(jsonDataFromXml)
        <div class="post">
            <div class="post1">
                <div class="PostOneTitle">
                    <a href="/one"><h1>Chivalry</h1></a>
                </div>
                <div class="PostOneDate"><i>Date: <b>24 Nov 2022</b></i></div>  
                <div class="PostOneAuthor"> <i>Author: <b>Manish Avasarala</b></i></div>
                <div class="PostOneSummary">
                    <img class="PostOneSummaryImg" src="https://static01.nyt.com/images/2013/07/18/opinion/LancelotRFD/LancelotRFD-sfSpan-v2.jpg" alt="" />
                    <br />
                    <span class="PostOneSummaryInfo">Chivarly? Lost but will be found! Every era needs its fair share of gentlemen and so chivalry like old wine will revive itself in a new bottle. So, ready for a sip?<hr/></span>
                </div>
            </div>
            
            <div class="post2">
                <div class="PostTwoTitle">
                    <a href="/two"><h1>DHONI-My Childhood hero</h1></a>
                </div>
                <div class="PostTwoDate">
                    <span><i>Date: <b>24 Nov 2022</b></i></span>
                </div>  
                <div class="PostTwoAuthor"> 
                    <span><i>Author: <b>Manish Avasarala</b></i></span>
                </div>
                <div class="PostTwoSummary">
                    <img class="PostTwoSummaryImg" src="https://sm.askmen.com/askmen_in/photo/default/article-features-677_7ppw.jpg" alt="" />
                    <br />
                    <span class="PostTwoSummaryInfo">
                    Clutch moments are those where legends are made, heroes are born and legacies are created. If ever there was a clutch moment, this was one.
                    <hr/>
                    </span>
                </div>
            </div>
            
            <div class="post3">
                <div class="PostThreeTitle">
                    <a href="/three"><h1>One-Sided Love</h1></a>
                </div>
                <div class="PostThreeDate">
                <span><i>Date: <b>24 Nov 2022</b></i></span>
                </div>  
                <div class="PostThreeAuthor"> 
                <span><i>Author: <b>Manish Avasarala</b></i></span>
                </div>
                <div class="PostThreeSummary">
                    <img class="PostThreeSummaryImg" src="https://res.cloudinary.com/nowandme/image/upload/blog/uccfa4lfikj2t7wmdurh" alt="" />
                    <br/>
                    <span class="PostThreeSummaryInfo">Unrequited love or one-sided love is love that is not openly reciprocated or understood as such by the beloved. The beloved may not be aware of the admirer's deep and pure affection, or may consciously reject it.<hr/>
                    </span>
                </div>
            </div>
        </div>
    
  )
}

export default Post
