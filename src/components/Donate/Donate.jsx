import React, { Component, useState,user, schema, getFormData,send_information,state,renderErrors} from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import donate from '../../Assets/logo.jpg'
import Joi from "joi";
import axios from "axios";
import './Donate.css';




const DonationForm = () => {
 
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

     
    
    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const validateForm = () => {
        if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' ) {
            toast.error('please enter correct data');
            return false;
        }
        if (firstName.length < 0 || lastName.length < 0) {
            toast.error('please enter correct data');
            return false;
        }
        if (!validateEmail(email)) {
            toast.error('please enter correct data ');
            return false;
        }
        return true;
    };

    const handleSubmit1 = (event) => {
        event.preventDefault();

        
        if (validateForm()) {
            toast.success('donate successfully');
            
            setFirstName('');
            setLastName('');
            setEmail('');
           
        }
    };


    


    const [donationType, setDonationType] = useState('one-time');
    const [amount, setAmount] = useState('');

    const handleDonationChange = (e) => {
        setDonationType(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
  
    };
    const [showtext, setshowtext] = useState(false);
    const toggletext = () => {
        setshowtext(!showtext)
    }
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

     







    return (

   
        <section className="donate-section">
            
            <img  src={donate} alt="" />
            
            <div className="donate">
            <div className="donate-icons">

            <i id="facebook"  class="fa-brands fa-square-facebook"></i>
             <i  id="twitter" class="fa-brands fa-square-twitter" ></i>
             <i id="lamp"  className="fa-brands fa-whatsapp" ></i>
             </div>
            <div className="h-1"> <h1>Donate to stand up for <br /> Palestine</h1></div> 
                <div className="row">
                    <div className="col-md-6">
                        <div className="donate-paragraph">
                            <p className="p-1">Palestinians desperately need us to take action HERE and NOW - please
                                 donate what you can to PSC</p>
                            <p className="p-2">Thousands of Palestinians have already been killed in Israel’s indiscriminate bombardment.</p>
                            <p className="p-3">PSC is working day and night to pressure UK leaders to call for a permanent ceasefire. Our costs are huge – please donate what you can to help fund our ongoing response, thank you.</p>
                            <div className="show-data">
                                <button onClick={toggletext} className="btn-donate"> <span>+</span>How your donation will make a difference </button>
                                {showtext && (
                                    <ul>

                                        <span>Your donation will help fund:</span>
                                        <br />
                                        <br />
                                        <li>Our emergency demonstrations - placards, stages and sound systems so our voice is heard</li>
                                        <li>Publicity - online and offline to amplify Palestinian demands</li>
                                        <li>Resources for local campaigning - we provide materials to dozens of local groups for use across Britain</li>
                                        <li>Media support - putting the case for Palestine through expert voices, providing researching briefings and opinion polls for the media</li>
                                        <p className="write-donate">Palestine Solidarity Campaign (PSC) is the biggest organisation in the UK
                                            dedicated to securing Palestinian human rights. We are almost entirely funded by donations from our members and supporters. We don’t accept money from governments, political parties, or big businesses so we are truly
                                            independent in our campaigning. You can find out more about PSC here.</p>
                                    </ul>

                                )}

                            </div>
                        </div>

                    </div>



                    <div className="col-md-6">
                        <div className="sign-in">
                            <form onSubmit={handleSubmit} className="donation-form">
                                <h3 className="form-title">Palestine needs our support for the long-haul. 
                                    Can you make an ongoing commitment to our work?</h3>
                                <div className="donation-type">

                                    <label>
                                        <input
                                            type="radio"
                                            name="donationType"
                                            value="one-time"
                                            checked={donationType === 'one-time'}
                                            onChange={handleDonationChange}

                                        />
                                        <span> One-off donation</span>

                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="donationType"
                                         
                                            
                                            onChange={handleDonationChange}
                                        />
                                        <span className="donate-span">I'll keep supporting your work for Palestine - make my donation monthly</span>
                                    </label>
                                </div>


                                <div className="amount-options">
                                
                                    {['5', '10', '20', '50', '75', '100', '250', '500', '1000', '2000', '5000', '6000'].map((value) => (
                                        <button
                                            type="button"
                                            
                                            key={value}
                                            onClick={() => setAmount(value)}
                                            className={`amount-button ${amount === value ? 'active' : ''}`}
                                            
                                        >
                                            £{value}
                                        </button>
                                    ))}
                                </div>

                                <div className="other-amount">
                                    <input
                                       
                                        type="number"
                                        placeholder="Other"
                                         value={amount}
                                     onChange={handleAmountChange }
                                         
                                        className="other-input"
                                        

                                    />
                                </div>
                               
                          
                                <input className="name" type="text" name="first_name" 
                                   
                                   value={firstName}
                                   onChange={(e) => setFirstName(e.target.value)}
            
                                   
                                placeholder="First name" required /> 

                                <input className="name" type="text" name="last_name" 
                                   value={lastName}
                                   onChange={(e) => setLastName(e.target.value)}
           
                             
                                  placeholder="Last name" required />             
                                <input className="name" type="email" name="email" 
                                  
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
          
                                    placeholder="Email" required />
                        
                                <div className="do">
                                    <h5>Your voice is vital for defending Palestinian human rights. Make sure you use it.
                                        Can we email you with key updates and actions you can take for Palestine?*</h5>
                    
                                    <input type="radio" id="full-price" name="" value="full-price" />
                                    <label className="formd-donate" for="donate">yes</label>
                                    <br />

                                    <input onClick={setSelectedOption} type="radio" id="fulle-price" name="lo" value="full-price" />

                                    <label className="formd-donate" for="donate">No</label>
                                    {selectedOption && (

                                        <p>Are you sure?
                                            Together we can be a powerful force for justice and peace – but
                                            only if we all play a part. Click ‘Yes’
                                            if you want to help, you can unsubscribe at any time.</p>
                                    )}

                                </div>
                                <button onClick={ handleSubmit1}  type="submit" className="submit-button">Donate</button>
                                <ToastContainer/>
                            </form >

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default DonationForm;