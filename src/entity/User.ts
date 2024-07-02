import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Music{
    @PrimaryGeneratedColumn()
    id: number | undefined

    @Column('text', { nullable: true })
    name: string | undefined

    @Column('integer', { nullable: true })
    pst: number | undefined

    @Column('integer', { nullable: true })
    t: number | undefined

    @Column('simple-json', { nullable: true })
    ar: string | undefined

    @Column('simple-json', { nullable: true })
    alia: string[] | undefined

    @Column('integer', { nullable: true })
    pop: number | undefined

    @Column('integer', { nullable: true })
    st: number | undefined

    @Column('text', { nullable: true })
    rt: string | undefined

    @Column('integer', { nullable: true })
    fee: number | undefined
    @Column('integer', { nullable: true })
    v: number | undefined
    @Column('integer', { nullable: true })
    crbt: number | undefined
    @Column('text', { nullable: true })
    cf: string | undefined

    @Column('simple-json', { nullable: true })
    al: string | undefined

    @Column('integer', { nullable: true })
    dt: number | undefined

    @Column('simple-json', { nullable: true })
    h: number | undefined

    @Column('simple-json', { nullable: true })
    m: number | undefined

    @Column('simple-json', { nullable: true })
    l: string | undefined

    @Column('integer', { nullable: true })
    sq: number | undefined

    @Column('integer', { nullable: true })
    hr: number | undefined

    @Column('integer', { nullable: true })
    a: number | undefined

    @Column('integer', { nullable: true })
    cd: number | undefined

    @Column('integer', { nullable: true })
    no: number | undefined

    @Column('integer', { nullable: true })
    rtUrl: number | undefined

    @Column('integer', { nullable: true })
    ftype: number | undefined

    @Column('simple-json', { nullable: true })
    rtUrls: string[] | undefined


    @Column('integer', { nullable: true })
    djId: number | undefined

    @Column('integer', { nullable: true })
    copyright: number | undefined

    @Column('integer', { nullable: true })
    s_id: number | undefined

    @Column('integer', { nullable: true })
    mark: number | undefined

    @Column('integer', { nullable: true })
    originCoverType: number | undefined

    @Column('integer', { nullable: true })
    originSongSimpleData: number | undefined

    @Column('integer', { nullable: true })
    tagPicList: number | undefined

    @Column('boolean', { nullable: true })
    resourceState: number | undefined

    @Column('integer', { nullable: true })
    version: number | undefined

    @Column('integer', { nullable: true })
    songJumpInfo: number | undefined

    @Column('integer', { nullable: true })
    entertainmentTags: number | undefined

    @Column('integer', { nullable: true })
    awardTags: number | undefined

    @Column('integer', { nullable: true })
    single: number | undefined

    @Column('integer', { nullable: true })
    noCopyrightRcmd: number | undefined

    @Column('integer', { nullable: true })
    mv: number | undefined

    @Column('integer', { nullable: true })
    rtype: number | undefined

    @Column('integer', { nullable: true })
    rurl: number | undefined

    @Column('integer', { nullable: true })
    mst: number | undefined

    @Column('integer', { nullable: true })
    cp: number | undefined

    @Column('text', { nullable: true })
    publishTime: number | undefined


    public setMusic(obj: Record<string, any>) {
        this.name = obj.name;
        this.pst = obj.pst;
        this.t = obj.t;
        this.ar = obj.ar;
        this.alia = obj.alia;
        this.pop = obj.pop;
        this.st = obj.st;
        this.rt = obj.rt;

        this.fee = obj.fee;
        this.v = obj.v;
        this.crbt = obj.crbt;
        this.cf = obj.cf;
        this.al = obj.al;
        this.dt = obj.dt;
        this.h = obj.h;

        this.m = obj.m;
        this.l = obj.l;
        this.sq = obj.sq;

        this.hr = obj.hr;
        this.a = obj.a;
        this.cd = obj.cd;
        this.no = obj.no;

        this.rtUrl = obj.rtUrl;
        this.ftype = obj.ftype;
        this.rtUrls = obj.rtUrls;
        this.djId = obj.djId;
        this.copyright = obj.copyright;
        this.s_id = obj.s_id;
        this.mark = obj.mark;
        this.originCoverType = obj.originCoverType;

        this.originSongSimpleData = obj.originSongSimpleData;
        this.tagPicList = obj.tagPicList;
        this.resourceState = obj.resourceState;
        this.version = obj.version;
        this.songJumpInfo = obj.songJumpInfo;
        this.entertainmentTags = obj.entertainmentTags;
        this.awardTags = obj.awardTags;
        this.single = obj.single;

        this.noCopyrightRcmd = obj.noCopyrightRcmd;
        this.mv = obj.mv;
        this.rtype = obj.rtype;
        this.rurl = obj.rurl;
        this.rurl = obj.rurl;
        this.mst = obj.mst;
        this.cp = obj.cp;
        this.publishTime = obj.publishTime;

    }
}
export default Music;