import React from "react";
import Project from "@/components/project"; // Project bileşenini içe aktarın
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projectsData = [
  {
    name: "London",
    date: "10.10.2022",
    address: "London Uk",
    total: 3,
    type: 1
  },
  {
    name: "Afsu",
    date: "10.10.2022",
    address: "Afyon Tr",
    total: 2,
    type: 2
  },
  {
    name: "Dublin",
    date: "10.10.2022",
    address: "Dublin",
    total: 4,
    type: 1
  },
  {
    name: "Orga",
    date: "10.10.2022",
    address: "Orga",
    total: 4,
    type: 2
  },
  // Diğer projeleri buraya ekleyin
];

const ProjectsPage: React.FC = () => {

  const type1Projects = projectsData.filter(project => project.type === 1);
  const type2Projects = projectsData.filter(project => project.type === 2);
  return (
    <div className="w-full mx-auto p-8 absolute mt-16">
      <Tabs defaultValue="type1" className="w-full">
        <TabsList className="w-full bg-transparent" >
          <TabsTrigger value="type1">Proje türü 1</TabsTrigger>
          <TabsTrigger value="type2">Proje türü 2</TabsTrigger>
        </TabsList>
        <TabsContent value="type1">
          {type1Projects.map((project, index) => (
            <Project key={index} {...project} index={index} />
          ))}
        </TabsContent>
        <TabsContent value="type2">
          {type2Projects.map((project, index) => (
            <Project key={index} {...project} index={index} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProjectsPage;
