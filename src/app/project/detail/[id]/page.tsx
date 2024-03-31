import { getData } from "@/services/projects";
import Image from "next/image";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const project = await getData(
    "http://localhost:3000/api/project/?id=" + params.id
  );
  return (
    <div className="">
      <div className="">
        <Image
          src={project.data.image}
          alt="project image"
          className="w-full object-cover"
          width={500}
          height={500}
        />
        <div className="bg-white p-4 px-6">
          <h3>{project.data.name}</h3>
          <h3>{project.data.desc}</h3>
        </div>
      </div>
    </div>
  );
}
