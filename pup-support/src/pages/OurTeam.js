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
    // Related functions here
    const [isFlipped1, setIsFlipped1] = useState(false);
    const [isFlipped2, setIsFlipped2] = useState(false);
    const [isFlipped3, setIsFlipped3] = useState(false);
    const [isFlipped4, setIsFlipped4] = useState(false);

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

    const handleArrowClick = (e) => {
        const { target } = e;
        switch(target.id) {
          case "dropdown-1": setIsFlipped1(!isFlipped1); break;
          case "dropdown-2": setIsFlipped2(!isFlipped2); break;
          case "dropdown-3": setIsFlipped3(!isFlipped3); break;
          case "dropdown-4": setIsFlipped4(!isFlipped4); break;
        }
    };

    // HTML/React components here to render page
    return (
        <div>
            <div>
              <h1>Our Team</h1>
              <p>Meet the faces behind Pup Support. Our team is made up of innovators, designers, and compassionate members who value the importance of inclusive mental health access.</p>
              <p>Lorem ipsum dolor sit amet consectetur. Urna morbi fringilla mauris sed. Curabitur fringilla neque dictum ultrices blandit turpis eget.</p>
            </div>

            {/* Executive Team */}
            <section className='mb-5'>
                <div className='d-flex flex-row align-items-center pt-5 pb-5'>
                    <div className='col-2'>
                        <p
                            id="dropdown-1"
                            className={`dropdown-icon ${isFlipped1 ? 'flip-vertical' : ''}`}
                            onClick={handleArrowClick}
                        >^</p>
                    </div>
                    <h2 className='team-header col-8 align-items-center'>Executive Team</h2>
                    <div className='col-2'></div>
                </div>
                <div className='img-group col-8' style={{ display: !isFlipped1 ? 'none' : 'flex'}}>
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
                <div className='d-flex flex-row align-items-center pt-5 pb-5'>
                    <div className='col-2'>
                        <p
                            id="dropdown-2"
                            className={`dropdown-icon ${isFlipped2 ? 'flip-vertical' : ''}`}
                            onClick={handleArrowClick}
                        >^</p>
                    </div>
                    <h2 className='team-header col-8 align-items-center'>Resources & Education Team</h2>
                    <div className='col-2'></div>
                </div>
                <div className='img-group col-8' style={{ display: !isFlipped2 ? 'none' : 'flex'}}>
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
              <div className='d-flex flex-row align-items-center pt-5 pb-5'>
                  <div className='col-2'>
                      <p
                          id="dropdown-3"
                          className={`dropdown-icon ${isFlipped3 ? 'flip-vertical' : ''}`}
                          onClick={handleArrowClick}
                      >^</p>
                  </div>
                  <h2 className='team-header col-8 align-items-center'>External Team</h2>
                  <div className='col-2'></div>
              </div>
              <div className='img-group col-8' style={{ display: !isFlipped3 ? 'none' : 'flex'}}>
                  {extImgs.map((member)=>{
                      return <div className='team-img' >
                        <img src={member.img} alt={member.name}></img>
                        <h3>{member.name}</h3>
                        <p>{member.position}</p>
                      </div>
                  })}
              </div>
          </section>

          {/* Creative Team */}
          <section className='mb-5'>
              <div className='d-flex flex-row align-items-center pt-5 pb-5'>
                  <div className='col-2'>
                      <p
                          id="dropdown-4"
                          className={`dropdown-icon ${isFlipped4 ? 'flip-vertical' : ''}`}
                          onClick={handleArrowClick}
                      >^</p>
                  </div>
                  <h2 className='team-header col-8 align-items-center'>Creative Team</h2>
                  <div className='col-2'></div>
              </div>
              <div className='img-group col-8' style={{ display: !isFlipped4 ? 'none' : 'flex'}}>
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