import { SiCsswizardry } from 'react-icons/si';
import { RiJavascriptFill } from 'react-icons/ri';
import { GrReactjs } from 'react-icons/gr';
import { FaHtml5 } from 'react-icons/fa';
import { FaGithubAlt } from 'react-icons/fa';
import './icons.css';

export default function Icons() {
  return (
    <div className="icons">
      <RiJavascriptFill size={50} color="rgba(233, 118, 83, 1)" className="icons"/>
      <GrReactjs size={50} color="rgba(8, 59, 126, 1)" className="icons"/>
      <SiCsswizardry size={50} color="rgba(50, 129, 233, 1)" className="icons"/>
      <FaHtml5 size={50} color="rgba(216, 40, 40, 1)" className="icons"/>
      <FaGithubAlt size={50} color="rgba(74, 74, 74, 1)" className="icons"/>
    </div>
  );
}