import { Log } from '../model/log';

export class logServeBack{
	log :Log[];
	count :number;

	constructor(searchResult? :any){
		this.count = searchResult && searchResult.count || 0;
		this.log = searchResult && 
						searchResult.results.map( result => new Log(result)) || [];
	}
}