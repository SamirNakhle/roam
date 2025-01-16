import { NewDocumentOptionsResolver, definePlugin } from "sanity";

const resolveNewDocumentOptions: NewDocumentOptionsResolver = (prev) => {
  return prev.filter((previousOption) => {
    return !["home", "settings", "section", "about", "download"].includes(
      previousOption.templateId,
    );
  });
};

export const customDocumentActions = definePlugin({
  name: "custom-document-actions",
  document: {
    newDocumentOptions: resolveNewDocumentOptions,
  },
});
