import markitBg from '../../public/images/markitbg.png'
import markit from '../../public/images/markit.png'
import nova from '../../public/images/nova.png'
import novaBg from '../../public/images/novabg.png'
import omegaBg from '../../public/images/omegabg.png'
import omega from '../../public/images/omegabakery.png'
import { ISkills, IWorks } from './interfaces'

export const works: IWorks[] = [
    {
        bg: markitBg,
        img: markit,
        title: "Markit",
        desc: "Responsive online market website and mobile application",
        color: "#0575E6",
    },
    {
        bg: novaBg,
        img: nova,
        title: "Nova Cinema",
        desc: "Movie ticket book responsive website",
        color: "#FF4B2B",
        swap: true
    },
    {
        bg: omegaBg,
        img: omega,
        title: "Omega Bakery",
        desc: "Payment and menu mobile application",
        color: "#FF0084",
    }
]

export const skills: ISkills[] = [
    {
      name: "Design thinking",
      percentage: 90,
    },
    {
      name: "UI Design",
      percentage: 100,
    },
    {
      name: "User research",
      percentage: 70,
    },
    {
      name: "Prototyping",
      percentage: 100,
    },
    {
      name: "Coding",
      percentage: 20,
    },
    {
      name: "Information architecture",
      percentage: 100,
    },
    {
      name: "Design strategy",
      percentage: 50,
    },
    {
      name: "Wireframing",
      percentage: 100,
    },
    {
      name: "Analytics",
      percentage: 50,
    },
    {
      name: "Web design",
      percentage: 90,
    },
    {
      name: "Mobile design",
      percentage: 100,
    },
    {
      name: "Graphic design",
      percentage: 60,
    },
  ];