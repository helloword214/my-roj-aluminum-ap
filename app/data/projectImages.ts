const modules = import.meta.glob(
  '../assets/images/projects/project-*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
);

// numeric sort (project-2 < project-10 < project-151)
export const projectImages = Object.entries(modules)
  .sort(([a], [b]) => {
    const na = Number(a.match(/project-(\d+)/i)?.[1] ?? 0);
    const nb = Number(b.match(/project-(\d+)/i)?.[1] ?? 0);
    return na - nb;
  })
  .map(([, v]) => v as string);
