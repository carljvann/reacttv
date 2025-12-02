import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

/**
 * ShowDetails displays the episodes and details for a selected show
 */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  // If no show is provided, encourage the user to select one
  if (!show) {
    return (
      <section>
        <p>Please select a show to view episodes.</p>
      </section>
    );
  }

  // Render the episode list and details for the selected show
  return (
    <>
      <EpisodeList
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </>
  );
}
