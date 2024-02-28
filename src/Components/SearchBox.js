import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox() {
    return (
        <div class="search p-3 d-flex shadow rounded">
            <SearchIcon />
            <input type='text' class="search-text-box ps-3 ms-3 border border-info border-end-0 border-top-0 border-bottom-0 " placeholder='coming soon ...' disabled ></input>
        </div>
    )
}