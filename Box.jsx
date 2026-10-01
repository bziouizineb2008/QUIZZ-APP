import { useState } from 'react'
import { 
  Star, 
  User,  
  HelpCircle, 
  Sparkles    
} from 'lucide-react';
import './App.css'

function Box(){
    return(
        <>
        <section>
            <div className="boxes-container">
                <div className="one-box">
                    <HelpCircle className="an-icon"/>
                    <p>12,000+</p>
                    <p className='p'>Quiz questions</p>
                </div>
                <div className="one-box">
                    <Sparkles className="an-icon"/>
                    <p>240K</p>
                    <p className='p'>Active players</p>
                </div>
                <div className="one-box">
                    <User className="an-icon"/>
                    <p>48</p>
                    <p className='p'>Categories</p>
                </div>
                <div className="one-box">
                    <Star className="an-icon"/>
                    <p>4.9/5</p>
                    <p className='p'>Player rating</p>
                </div>
            </div>
        </section>
        </>
    );
}

export default Box;