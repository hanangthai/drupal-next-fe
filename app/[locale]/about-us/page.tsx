import axios from "axios";
import { Metadata } from "next";

// just hardcode to generate meta data, in real project we can get meta data from API.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Us",
    description: "Learn more about our company and team.",
  };
}

export default async function Home({params}: {params: {locale: string}}) {
  // Just hardcode the page_id,
  // in a real project we can get page_id from the API or get from params,
  // props...
  const page_id = '0931a5d1-0db0-4ca9-909a-8fc0676eb8f4';
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASEURL}/node/page/${page_id}?include=field_sections`);
    const aboutPage = response.data;
    const pageTitle = `${aboutPage.data.attributes.title} -  ${params.locale} language`;
    const pageSections = aboutPage.included;
    return (
      <div>
        <h1>{pageTitle}</h1>
        <ul>
          {pageSections.map((section: any, index: number) => (
            <li key={index}>
              <p>{section.type}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (err) {
    console.error("Error fetching data");
  }
}
