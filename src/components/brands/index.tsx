import { getCollaborators } from "@/lib/queries";

import { getDimensions, urlFor } from "@/sanity/lib/image";

import { BrandsClient } from "./brands-client";

export const Brands = async () => {
  const res = await getCollaborators();
  const brands = res.map((c) => ({
    src: urlFor(c.logo).width(500).url(),
    ...getDimensions(c.logo.asset._ref),
    title: c.name,
  }));
  return (
    <section className="my-[100px] flex flex-col overflow-hidden pl-[25px] text-white sm:pl-[45px] lg:flex-row lg:pl-[100px]">
      <div className="pb-[75px]">
        <h2 className="leading-none">
          <span className="text-[22px] font-semibold">RoamTT</span> <br />
          <span className="block py-4 text-[100px] font-black">10+</span> <br />
          <span className="text-[22px] font-semibold">Past Collaborators</span>
          <br />
          <span className="text-lg font-light">Est 2016</span>
        </h2>
      </div>
      <BrandsClient brands={brands} />
    </section>
  );
};
