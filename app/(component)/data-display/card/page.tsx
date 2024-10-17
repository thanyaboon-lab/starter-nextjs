"use client";
import { CardBase, CardCollapsible } from "@/components/DataDisplay/Card";
import { FaCode } from "react-icons/fa";

export default function Card() {
  const bodyContent = () => {
    return <>slot body content</>;
  };
  return (
    <div className="flex flex-col gap-3">
      <CardBase title="Card Base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        tenetur libero porro facilis rerum! Deleniti suscipit, optio non, totam
        exercitationem sunt sed eveniet eligendi nesciunt, voluptatem delectus
        quo accusantium hic? Vel modi, aperiam, suscipit quidem maiores eos
        ipsam nam voluptate qui a impedit vitae minus, doloribus culpa iusto.
        Error et omnis eveniet aperiam aut, commodi doloremque. Atque fugit non
        harum. Velit harum a et tenetur officiis exercitationem at commodi nam
        fugit veniam quos numquam adipisci, rem, ratione beatae cupiditate culpa
        ab fuga reprehenderit optio. Quia quaerat nam assumenda repellat in.
      </CardBase>

      <CardCollapsible
        title="Card Collapsible"
        format="border"
        icon={<FaCode />}
        slotBodyContent={bodyContent}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        molestiae iusto praesentium maxime obcaecati ex id at. Ducimus placeat
        nemo libero natus nobis impedit possimus, est quis doloribus eveniet.
        Quisquam. Cum corporis id cumque neque delectus necessitatibus numquam,
        similique perferendis iure, et nobis porro facilis voluptas totam
        consequatur nostrum dolorem quam labore! Quas necessitatibus
        consequuntur eaque, corporis animi quod. Fugiat. Iste eum voluptatibus
        ex recusandae est, nobis rem atque tempore natus quasi, maxime,
        reprehenderit consectetur eaque alias laboriosam asperiores? Quo
        praesentium perferendis non atque laborum quidem adipisci officia illo
        pariatur? Eligendi necessitatibus quasi libero adipisci nulla a
        repellat, recusandae ipsam ea facilis optio animi accusantium
        consequatur qui quisquam omnis perferendis ab pariatur dolor quos ullam
        perspiciatis. Quos tenetur aperiam provident? Aliquam, porro dolorem,
        necessitatibus qui libero aliquid doloremque perspiciatis fugit delectus
        veniam, nesciunt quis odio eius aspernatur commodi. Porro, dolorum amet
        accusantium provident eos asperiores unde perferendis libero!
        Voluptatibus, eius?
      </CardCollapsible>
    </div>
  );
}
