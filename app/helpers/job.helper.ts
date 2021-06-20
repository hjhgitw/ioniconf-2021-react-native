import {differenceInMilliseconds, format, parse} from 'date-fns';

export class JobHelper {
    static shiftIconName(shiftTime = '00:00') {
        return Number(shiftTime.split(':')[0] || 0) >= 18 ? 'moon-dark' : 'sun-light';
    }

    static shiftHoursCount(jobShift: string) {
        const [start, stop] = jobShift.split(' - ').map(t => parse(t, 'kk:mm', new Date()));
        return Math.abs(differenceInMilliseconds(start, stop)) / 3600000;
    }

    static shiftStartDate(shiftStartDate: string) {
        return format(parse(shiftStartDate, 'yyyy-MM-dd', new Date()), 'MMM d, yyyy');
    }

    static jobTypeLabel(type: string) {
        return ({
            PER_DIEM: 'Per Diem'
        } as { [k: string]: string })[type] || '[TYPE]'
    }

    static jobFacilityLocation(job: { [k: string]: any }) {
        /* eslint-disable @typescript-eslint/camelcase */
        const {fac_street_address, fac_city, fac_state_abbreviation, fac_zip_code} = job.facility;
        return [fac_street_address, fac_city, fac_state_abbreviation, fac_zip_code].filter(Boolean).join(', ')
        /* eslint-enable @typescript-eslint/camelcase */
    }

    static jobAmount(job: { [k: string]: any }) {
        return (job.billRate * JobHelper.shiftHoursCount(job.job_shift)).toFixed(2)
    }
}

