export const getHiltColor = (saber, segmentType) =>
  saber.saber_segments.find(
    (saber_segment) =>
      saber_segment.segment_id ===
      saber.segments.find((segment) => segment.segment_type === segmentType).id
  ).hilt_color;
