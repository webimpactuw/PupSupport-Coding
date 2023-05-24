// Executive team members
import AmyLy from '../assets/our_team_images/AmyLy.jpg';
import AngelaChen from '../assets/our_team_images/AngelaChen.jpg';
import AnnaHuangHu from '../assets/our_team_images/AnnaHuangHu.jpg';
import HinaYu from '../assets/our_team_images/HinaYu.jpg';
import NoahHirose from '../assets/our_team_images/NoahHirose.jpg';
import RobinLai from '../assets/our_team_images/RobinLai.jpg';
import TracyMai from '../assets/our_team_images/TracyMai.jpg';
import YunaPark from '../assets/our_team_images/YunaPark.jpg';

import { useState } from 'react';
import '../css/OurTeam.css';

/**
 * Pupsupport Our Team Page
 */
function OurTeam() {

    const execImgs = [
      {img: YunaPark, name: "Yuna Park", position: "President Co-founder"}, 
      {img: AmyLy, name: "Amy Ly", position: "Vice President, Co-founder"}, 
      {img: AngelaChen, name: "Angela Chen", position: "President"}, 
      {img: NoahHirose, name: "Noah Hirose", position: "Treasurer"}, 
      {img: HinaYu, name: "Hina Yu", position: "Director of Internal Affairs"}, 
      {img: AnnaHuangHu, name: "Anna Huang Hu", position: "Vice President"}, 
      {img: TracyMai, name: "Tracy Mai", position: "Executive Intern"}, 
      {img: RobinLai, name: "Robin Lai", position: "Director of Creative Operations"}
    ];

    const resEduImgs = [
      {img: YunaPark, name: "Yuna Park", position: "President Co-founder"}, 
      {img: AmyLy, name: "Amy Ly", position: "Vice President, Co-founder"}, 
      {img: AngelaChen, name: "Angela Chen", position: "President"}, 
      {img: NoahHirose, name: "Noah Hirose", position: "Treasurer"}, 
      {img: HinaYu, name: "Hina Yu", position: "Director of Internal Affairs"}, 
      {img: AnnaHuangHu, name: "Anna Huang Hu", position: "Vice President"}, 
      {img: TracyMai, name: "Tracy Mai", position: "Executive Intern"}, 
      {img: RobinLai, name: "Robin Lai", position: "Director of Creative Operations"}
    ];

    const extImgs = [
      {img: YunaPark, name: "Yuna Park", position: "President Co-founder"}, 
      {img: AmyLy, name: "Amy Ly", position: "Vice President, Co-founder"}, 
      {img: AngelaChen, name: "Angela Chen", position: "President"}, 
      {img: NoahHirose, name: "Noah Hirose", position: "Treasurer"}, 
      {img: HinaYu, name: "Hina Yu", position: "Director of Internal Affairs"}, 
      {img: AnnaHuangHu, name: "Anna Huang Hu", position: "Vice President"}, 
      {img: TracyMai, name: "Tracy Mai", position: "Executive Intern"}, 
      {img: RobinLai, name: "Robin Lai", position: "Director of Creative Operations"}
    ];

    const createImgs = [
      {img: YunaPark, name: "Yuna Park", position: "President Co-founder"}, 
      {img: AmyLy, name: "Amy Ly", position: "Vice President, Co-founder"}, 
      {img: AngelaChen, name: "Angela Chen", position: "President"}, 
      {img: NoahHirose, name: "Noah Hirose", position: "Treasurer"}, 
      {img: HinaYu, name: "Hina Yu", position: "Director of Internal Affairs"}, 
      {img: AnnaHuangHu, name: "Anna Huang Hu", position: "Vice President"}, 
      {img: TracyMai, name: "Tracy Mai", position: "Executive Intern"}, 
      {img: RobinLai, name: "Robin Lai", position: "Director of Creative Operations"}
    ];

    return (
        <div>
            <div className='d-flex flex-row align-items-center justify-content-center pt-5 mx-10 mb-5'>
              <div className='col-2'></div>
              <h1 className='col-2 team-title'>Our Team</h1>
              <div className='border'></div>
              <p className='ml-4 col-5'>Meet the faces behind Pup Support. Our team is made up of innovators, designers, and compassionate members who value the importance of inclusive mental health access.</p>
              <div className='col-2'></div>
            </div>

            {/* Executive Team */}
            <section className='mb-5'>
                <div className='d-flex flex-row align-items-center pt-3 pb-3'>
                    <div className='col-2'></div>
                    <h2 className='team-header col-8 align-items-center'>Executive Team</h2>
                    <div className='col-2'></div>
                </div>
                <div className='img-group col-8'>
                    {execImgs.map((exec)=>{
                        return <div className='team-img' >
                          <img src={exec.img} alt={exec.name}></img>
                          <h3>{exec.name}</h3>
                          <p>{exec.position}</p>
                        </div>
                    })}
                </div>
            </section>

            {/* Resource & Education Team */}
            <section className='mb-5'>
                <div className='d-flex flex-row align-items-center pt-3 pb-3'>
                    <div className='col-2'></div>
                    <h2 className='team-header col-8 align-items-center'>Resources & Education Team</h2>
                    <div className='col-2'></div>
                </div>
                <div className='img-group col-8'>
                    {resEduImgs.map((member)=>{
                        return <div className='team-img' >
                          <img src={member.img} alt={member.name}></img>
                          <h3>{member.name}</h3>
                          <p>{member.position}</p>
                        </div>
                    })}
                </div>
            </section>

            {/* External Team */}
            <section className='mb-5'>
                <div className='d-flex flex-row align-items-center pt-3 pb-3'>
                    <div className='col-2'></div>
                    <h2 className='team-header col-8 align-items-center'>External Team</h2>
                    <div className='col-2'></div>
                </div>
                <div className='img-group col-8'>
                    {extImgs.map((member)=>{
                        return <div className='team-img'>
                            <img src={member.img} alt={member.name}></img>
                            <h3>{member.name}</h3>
                            <p>{member.position}</p>
                        </div>
                    })}
                </div>
            </section>

            {/* Creative Team */}
            <section className='mb-5'>
                <div className='d-flex flex-row align-items-center pt-3 pb-3'>
                    <div className='col-2'></div>
                    <h2 className='team-header col-8 align-items-center'>Creative Team</h2>
                    <div className='col-2'></div>
                </div>
                <div className='img-group col-8'>
                    {createImgs.map((member)=>{
                        return <div className='team-img' >
                        <img src={member.img} alt={member.name}></img>
                        <h3>{member.name}</h3>
                        <p>{member.position}</p>
                        </div>
                    })}
                </div>
            </section>
        </div>
    );
}

export default OurTeam;