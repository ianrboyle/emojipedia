import React from "react";
import Entry from "./Entry";

function CreateEntry(emoji) {
  return <Entry name={emoji.name} meaning={emoji.meaning} emoji={emoji.emoji} />;
}

export default CreateEntry;
