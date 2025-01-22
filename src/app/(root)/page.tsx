import SearchForm from "../components/SearchForm";
import StartupCard from "../components/StartupCard";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const posts = [
    {
      _createdAt: new Date(),
      views: "1.2k",
      author: { _id: 1, name: "John Doe" },
      _id: 1,
      description: "A platform that connects people with the same interests",
      image:
        "https://imgs.search.brave.com/ryyuw7t0P971QoyBkWFoV-rqxqgfMoviAhsRdd1EzQU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmlt/Z2ZsaXAuY29tLzQv/NmVkZXZpLmpwZw",
      category: "Tech",
      title: "Connectify",
    },
    {
      _createdAt: new Date(),
      views: "54k",
      author: { _id: 2, name: "Jane Doe" },
      _id: 2,
      description: "A site that helps you find the best deals on the internet",
      image:
        "https://imgs.search.brave.com/WtZVl7oBflH87yJTADGt94DU6R4wwRXyAtsyWEPTBgI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTEudGVub3IuY29t/L20vMzdGZzlMRHJ5/ZndBQUFBZC9rZmMt/cGVycm8uZ2lm.gif",
      category: "Tech",
      title: "Deal Finder",
    },
    {
      _createdAt: new Date(),
      views: "1.2k",
      author: { _id: 3, name: "Jhannel Doe" },
      _id: 3,
      description: "a place where you can find the best deals on the internet",
      image:
        "https://imgs.search.brave.com/2cHcykG5URUGgvkMlnNqh4qu3SSa0I9Sxy4GQY0-wa4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzEzMjc1NDg2L3Iv/aWwvYWM1OTVkLzQx/NTg0NTMzMzAvaWxf/NjAweDYwMC40MTU4/NDUzMzMwX2JwNW0u/anBn",
      category: "Tech",
      title: "Review Finder",
    },
    {
      _createdAt: new Date(),
      views: "1.2k",
      author: { _id: 4, name: "John Doe" },
      _id: 4,
      description: "A platform that connects people with the same interests",
      image:
        "https://imgs.search.brave.com/ryyuw7t0P971QoyBkWFoV-rqxqgfMoviAhsRdd1EzQU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmlt/Z2ZsaXAuY29tLzQv/NmVkZXZpLmpwZw",
      category: "Tech",
      title: "Connectify",
    },
    {
      _createdAt: new Date(),
      views: "54k",
      author: { _id: 5, name: "Jane Doe" },
      _id: 5,
      description: "A site that helps you find the best deals on the internet",
      image:
        "https://imgs.search.brave.com/WtZVl7oBflH87yJTADGt94DU6R4wwRXyAtsyWEPTBgI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTEudGVub3IuY29t/L20vMzdGZzlMRHJ5/ZndBQUFBZC9rZmMt/cGVycm8uZ2lm.gif",
      category: "Tech",
      title: "Deal Finder",
    },
    {
      _createdAt: new Date(),
      views: "1.2k",
      author: { _id: 6, name: "Jhannel Doe" },
      _id: 6,
      description: "a place where you can find the best deals on the internet",
      image:
        "https://imgs.search.brave.com/2cHcykG5URUGgvkMlnNqh4qu3SSa0I9Sxy4GQY0-wa4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzEzMjc1NDg2L3Iv/aWwvYWM1OTVkLzQx/NTg0NTMzMzAvaWxf/NjAweDYwMC40MTU4/NDUzMzMwX2JwNW0u/anBn",
      category: "Tech",
      title: "Review Finder",
    },
  ];

  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          pitch your startup, <br /> connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, vote on Pitches, and get noticed in virtual
          competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "Latest Pitches"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
