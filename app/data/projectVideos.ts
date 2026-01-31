// File: app/data/projectVideos.ts

const modules = import.meta.glob('/app/assets/videos/video-*.{mp4,MP4}', {
  eager: true,
  import: 'default',
});

const getNum = (p: string) => Number(p.match(/video-(\d+)/i)?.[1] ?? 0);

export type ProjectVideo = {
  n: number;
  title: string;
  src: string;
};

export const projectVideos: ProjectVideo[] = Object.entries(modules)
  .sort(([a], [b]) => getNum(a) - getNum(b))
  .map(([path, src]) => {
    const n = getNum(path);
    return {
      n,
      title: `Video ${n}`,
      src: src as string,
    };
  });
