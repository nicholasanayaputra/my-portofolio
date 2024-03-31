import Modal from "@/components/core/Modal";
import { getData } from "@/services/projects";
import Image from "next/image";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const project = await getData(
    "http://localhost:3000/api/project/?id=" + params.id
  );
  return (
    <Modal>
      <Image
        src={project.data.image}
        alt="project image"
        className=" object-cover aspect-square col-span-2"
        width={500}
        height={500}
      />
      <div className="bg-white p-4 px-6">
        <h3>{project.data.name}</h3>
        <h3>{project.data.desc}</h3>
      </div>
    </Modal>
  );
}
