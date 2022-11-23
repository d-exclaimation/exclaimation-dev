//
//  RepoGridViewModel.tsx
//  exclaimation
//
//  Created by d-exclaimation on 10:11 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useWidthQueries } from "../../lib/hooks/useWidthQuery";
import { langBarOptions } from "../../lib/LanguageBarURL";
import { RepoSnapshotFragment } from "../../models/graphql/types";
import RepoPreview from "./RepoPreview";

interface Props {
  repos: RepoSnapshotFragment[];
}

const RepoGridViewModel: React.FC<Props> = ({
  repos,
}: React.PropsWithChildren<Props>) => {
  const [isMobile, isWideMobile] = useWidthQueries(
    { type: "max", maxWidth: 768 },
    { type: "max", maxWidth: 1000 }
  );

  const langImage = (lang: string): string => {
    if (langBarOptions.has(lang)) {
      return `https://delivery-exclaimation-30760d.netlify.app/images/lang-bar/${lang}-bar.png`;
    }
    return "/images/default-bar.png";
  };

  return (
    <SimpleGrid
      columns={isMobile ? 1 : isWideMobile ? 2 : 3}
      spacing="3vmin"
      m="3vmin"
    >
      {repos.map((repo) => (
        <RepoPreview
          key={repo.id}
          isPortrait={isWideMobile}
          imageURL={langImage(`${repo.language}`.toLowerCase())}
          title={repo.name}
          body={repo.description || repo.repoName}
          url={repo.url}
        />
      ))}
    </SimpleGrid>
  );
};

export default RepoGridViewModel;
