"use client";

import { useRouter } from "next-nprogress-bar";
import { useState } from "react";

import { Button } from "@/app/_components/global/Button";
import { TextField } from "@/app/_components/global/Input";
import { SmallSectionWrapper } from "@/app/_components/global/Wrapper";

import Search from "./icons/Search";

export function SearchBar({ query: q }: Readonly<{ query?: string }>) {
  const router = useRouter();
  const [query, setQuery] = useState<string>(q ?? "");

  function handleSearch(query: string) {
    setQuery(query);
  }

  return (
    <SmallSectionWrapper id="SearchBar">
      <div className="flex gap-[12px] items-center justify-between w-full mt-[30px] lg:mt-0">
        <TextField
          placeholder="Cari berita di moklet.org..."
          className="w-[88%]"
          value={query}
          handleChange={(e) => {
            handleSearch(e.target.value);
          }}
          type={""}
          name={""}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              router.push(`/berita/search?q=${query}`);
            }
          }}
        />
        <Button
          variant={"primary"}
          className="w-[54px] h-[54px] md:hidden flex justify-center items-center px-0 py-0"
          onClick={() => {
            router.push(`/berita/search?q=${query}`);
          }}
        >
          <Search />
        </Button>
        <Button
          variant={"primary"}
          className="h-[54px] md:flex hidden justify-center items-center"
          onClick={() => {
            router.push(`/berita/search?q=${query}`);
          }}
        >
          Cari berita
        </Button>
      </div>
    </SmallSectionWrapper>
  );
}
