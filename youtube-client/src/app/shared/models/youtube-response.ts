import { ResponseItem } from './response-item';
import { ResponseItemById } from './response-item-by-id';

export interface YoutubeResponse {
  kind: string;
  etag: string;
  nextPageToken?: string;
  regionCode?: string;
  pageInfo?: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: ResponseItem[] | ResponseItemById[];
}
