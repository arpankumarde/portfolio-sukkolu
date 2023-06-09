import { accenture, project1, project2, project3, project4 } from '../assets/';
import { avatar } from '../assets/';

const bio = {
  "name": "Ramakrishna Sukkolu",
  "firstName": "Ramakrishna",
  "lastname": "Sukkolu",
  "role": "Data Analyst",
  "tag": "Immediate Joiner",
  "email": "ksukkolu@gmail.com",
  "phone": "+917506472994",
  "location": "Mumbai, India",
  "links": {
    "linkedin": "https://www.linkedin.com/in/ramakrishna-sukkolu-9634711a7/",
    "github": "https://github.com/sukkolu"
  },
  "about": "Hello, I'm Ramakrishna Sukkolu, a data analyst student with a passion for exploring the endless possibilities that data can offer. Over the past year, I've developed skills in MySQL, Power BI, Microsoft Excel, statistics, Python programming, data visualization, data cleaning, Pandas, Numpy, and Tableau. I'm currently seeking a database job to apply my skills and knowledge in a real-world setting. My fascination with data has driven me to dive deep into the world of data analytics and explore new ways to unlock insights from complex datasets. I believe that data-driven decision-making is the key to success in any business, and I'm eager to help organizations drive growth and achieve their goals. Despite my dedication to my work, I always bring a positive and lighthearted approach to everything I do. So, if you're looking for a skilled and passionate data analyst with a sense of humor, let's connect and explore the possibilities that data can offer!",
  "avatar": avatar,
  "resumeLink": "https://drive.google.com/uc?id=1p32vfdernK_cJJgme_-JzgCYRMHoNk03",
  "projects": [
    {
      "title": "INDIAN STARTUP FUNDING Analysis using Stream-lit",
      "description": "This project aims to analyze the growth and progress of Indian startups between 2015 and 2020 using interactive data visualization tools. The project utilizes Streamlit to showcase insights and trends in the Indian startup ecosystem through various diagrams such as pie charts and bar graphs. The interactive platform enables users to explore the data and gain a comprehensive understanding of the Indian startup ecosystem, including the funding received, industry-wise distribution, and geographical location of startups. The project provides a visually appealing and user-friendly way to comprehend the dynamic nature of the Indian startup ecosystem and track the growth and progress of Indian startups over the years.",
      "banner": project1,
      "repoLink": "https://github.com/sukkolu/Indian_startup",
      "deployLink": "https://sukkolu-indian-startup-app-ecuqu8.streamlit.app/"
    },
    {
      "title": "HR Analytics Dashboard using Power BI",
      "description": "The project aimed to address the issue of attrition and identified key factors that could reduce it. The project team focused on improving the hiring process, enhancing the employee experience, and increasing workforce productivity. The team's efforts were successful in gaining the trust of employees and achieving positive results in reducing attrition rates. The project team's strategy included implementing measures such as introducing new training programs, improving benefits packages, creating career growth opportunities, and improving overall communication and transparency. As a result of these efforts, employees felt more supported and valued, leading to increased productivity and a more engaged workforce. Overall, the project demonstrated the importance of addressing key factors that contribute to attrition and the positive impact that a focused approach to employee satisfaction can have on an organization.",
      "banner": project2,
      "repoLink": "https://github.com/sukkolu/HR-Analytics-Dashboard",
      "deployLink": ""
    },
    {
      "title": "Madhav Ecommerce sales dashboard using Power BI",
      "description": "The project involved the development of an interactive dashboard for tracking and analyzing online sales data. This dashboard incorporated complex parameters that allowed for drilling down into worksheets and customization using filters and slicers. In addition, connections were created, new tables were joined, and calculations were manipulated to enable user-driven parameters for visualizations. A range of customized visualizations were also utilized, including bar charts, pie charts, donut charts, clustered bar charts, scatter charts, line charts, area charts, maps, and slicers. Overall, the interactive dashboard provided a comprehensive and flexible tool for analyzing and tracking online sales data, with a variety of customizable options for data exploration and visualization.",
      "banner": project3,
      "repoLink": "https://github.com/sukkolu/Madhav-Ecommerce-Sales-Dashboard",
      "deployLink": ""
    },
    {
      "title": "Python project on Diwali Sale",
      "description": "In this project, we focused on enhancing customer experience and boosting sales through data analysis. Firstly, we conducted data cleaning and manipulation to ensure the quality and integrity of the dataset. Using popular libraries such as pandas, matplotlib, and seaborn, we performed exploratory data analysis (EDA) to gain valuable insights. By leveraging the power of data, we identified potential customers across various states, occupations, genders, and age groups. This knowledge allowed us to target specific customer segments and tailor our marketing strategies accordingly, ultimately enhancing the overall customer experience. Additionally, we delved into sales data to identify the most successful product categories and individual products. By understanding which items were in high demand, we could optimize inventory planning and ensure a timely supply to meet customer demands, resulting in improved sales performance. Overall, this project demonstrates the effectiveness of data-driven decision-making in improving customer satisfaction and driving sales growth.",
      "banner": project4,
      "repoLink": "https://github.com/sukkolu/Python_project",
      "deployLink": ""
    },
  ],
  "work": [
    {
      "role": "Transaction Analyst",
      "company": "Accenture",
      "companyLogo": accenture,
      "description": [
        `Testing(Benefit validation): As a PBM Service Provider, I specialize in validating and testing Benefit setups for US clients. I work diligently to ensure that all stakeholders, including clients and customers, experience seamless service by proactively sending clarifications to offshore and onshore teams whenever necessary. My testing and validation processes guarantee that all discrepancies are identified and addressed promptly, minimizing potential issues for everyone involved.`,
        `Dedicated(Benefit setup): As a Client Planner, my primary responsibility is to set plans for clients and clarify requests processed by onshore teams.I provide professional suggestions and preventative measures to minimize errors, ensuring a smooth and efficient workflow.My keen attention to detail and ability to identify potential issues early on allow me to provide exceptional service to clients and ensure their needs are met effectively.`],
      "from": "08/2020",
      "to": "09/2022"
    },
  ],
  "education": [
    {
      "title": "SSC",
      "institution": "Sevaram Lalwani secondary school",
      "from": "06/2005",
      "to": "03/2014"
    },
    {
      "title": "HSC",
      "institution": "Guru Nanak Khalsa College",
      "from": "07/2014",
      "to": "03/2016"
    },
    {
      "title": "Bachelor of Science in Statistics",
      "institution": "University of Mumbai",
      "from": "07/2016",
      "to": "06/2019"
    },
  ],
  "coursework": [
    {
      "title": "Full Stack Data Science Program",
      "institution": "iNeuron.ai",
      "from": "09/2022",
      "to": "Present"
    },
  ]
}


export default bio;