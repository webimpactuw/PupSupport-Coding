// Executive team members
import TBDHeart from '../assets/our_team_images/TBDHeart.jpeg';
import AmyLy from '../assets/our_team_images/AmyLy.jpg';
import AngelaChen from '../assets/our_team_images/AngelaChen.jpg';
import AnnaHuangHu from '../assets/our_team_images/AnnaHuangHu.jpg';
import HinaYu from '../assets/our_team_images/HinaYu.jpg';
import NoahHirose from '../assets/our_team_images/NoahHirose.jpg';
import RobinLai from '../assets/our_team_images/RobinLai.jpg';
import TracyMai from '../assets/our_team_images/TracyMai.jpg';
import YunaPark from '../assets/our_team_images/YunaPark.jpg';
import ChristineHau from '../assets/our_team_images/ChristineHau.jpeg';
import ZoeySuarez from '../assets/our_team_images/ZoeySuarez.jpeg';
import AllyTran from '../assets/our_team_images/AllyTran.jpeg';
import IrisChoe from '../assets/our_team_images/IrisChoe.jpeg';
import MichelleGuan from '../assets/our_team_images/MichelleGuan.jpeg';
import EllaSilvas from '../assets/our_team_images/EllaSilvas.jpeg';
import AllysonLee from '../assets/our_team_images/AllysonLee.jpeg';
import StephanieChou from '../assets/our_team_images/StephanieChou.jpeg';
import MadisonKim from '../assets/our_team_images/MadisonKim.jpeg';
import KalinaLuong from '../assets/our_team_images/KalinaLuong.jpeg';
import AnniePao from '../assets/our_team_images/AnniePao.jpeg';
import BobLi from '../assets/our_team_images/BobLi.jpeg';

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
      {img: ChristineHau, name: "Christine Hau", position: "Research Coordinator"}, 
      {img: ZoeySuarez, name: "Zoey Suarez", position: "Research Coordinator"}, 
      {img: AllyTran, name: "Ally Tran", position: "Education Chair"}, 
      {img: IrisChoe, name: "Iris Choe", position: "Podcast Producer"}, 
    ];

    const extImgs = [
      {img: AngelaChen, name: "Angela Chen", position: "Director of External"}, 
      {img: MichelleGuan, name: "Michelle Guan", position: "Website Administrator"}, 
      {img: AnnaHuangHu, name: "Anna Huang Hu", position: "Writer & Editor"}, 
      {img: EllaSilvas, name: "Ella Silvas", position: "Social Media Manager"}, 
      {img: AllysonLee, name: "Allyson Lee", position: "Social Media Manager"}, 
      {img: TBDHeart, name: "TBD", position: "Writer & Editor"}, 
    ];

    const createImgs = [
      {img: RobinLai, name: "Robin Lai", position: "Director of Creative Operations"},
      {img: StephanieChou, name: "Stephanie Chou", position: "Creative Director"}, 
      {img: TBDHeart, name: "Arya Patel", position: "Creative Director"}, 
      {img: MadisonKim, name: "Madison Kim", position: "Lead Designer"}, 
      {img: TBDHeart, name: "Amy Duong", position: "Typographer"}, 
      {img: KalinaLuong, name: "Kalina Luong", position: "Typographer"}, 
      {img: AnniePao, name: "Annie Pao", position: "Designer"}, 
      {img: TBDHeart, name: "Sabrina Liu", position: "Designer"}, 
      {img: BobLi, name: "Bob Li", position: "Designer"},
      {img: TBDHeart, name: "Misty Becker", position: "Designer"}
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