import { InstantSearch } from "react-instantsearch";

import { indexName, searchClient } from "@/providers";

type Props = {
  children?: React.ReactNode;
};

export const AlgoliaSearchWrapper: React.FC<Props> = ({ children }) => {
  if (!searchClient) {
    return <>{children}</>;
  }

  return (
    <InstantSearch searchClient={searchClient} indexName={indexName}>
      {children}
    </InstantSearch>
  );
};
