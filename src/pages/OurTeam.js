// Executive team members
import TBDHeart from '../assets/ourTeam/tbd-heart.jpeg';
import AmyLy from '../assets/ourTeam/amy-ly.jpg';
import AngelaChen from '../assets/ourTeam/angela-chen.jpg';
import AnnaHuangHu from '../assets/ourTeam/anna-huang-hu.jpg';
import HinaYu from '../assets/ourTeam/hina-yu.jpg';
import NoahHirose from '../assets/ourTeam/noah-hirose.jpg';
import RobinLai from '../assets/ourTeam/robin-lai.jpg';
import TracyMai from '../assets/ourTeam/tracy-mai.jpg';
import YunaPark from '../assets/ourTeam/yuna-park.jpg';
import ChristineHau from '../assets/ourTeam/christine-hau.jpeg';
import ZoeySuarez from '../assets/ourTeam/zoey-suarez.jpeg';
import AllyTran from '../assets/ourTeam/ally-tran.jpeg';
import IrisChoe from '../assets/ourTeam/iris-choe.jpeg';
import MichelleGuan from '../assets/ourTeam/michelle-guan.jpeg';
import EllaSilvas from '../assets/ourTeam/ella-silvas.jpeg';
import AllysonLee from '../assets/ourTeam/allyson-lee.jpeg';
import StephanieChou from '../assets/ourTeam/stephanie-chou.jpeg';
import MadisonKim from '../assets/ourTeam/madison-kim.jpeg';
import KalinaLuong from '../assets/ourTeam/kalina-luong.jpeg';
import AnniePao from '../assets/ourTeam/annie-pao.jpeg';
import BobLi from '../assets/ourTeam/bob-li.jpeg';

import '../css/our-team.css';

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